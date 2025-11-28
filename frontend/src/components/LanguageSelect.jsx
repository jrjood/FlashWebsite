import { useEffect, useRef, useState, useMemo } from 'react';
import {
  Root,
  Button,
  Chevron,
  Listbox,
  Option,
} from '../assets/wrappers/LanguageSelect';
import { useTranslation } from 'react-i18next';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const LANGS = [
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'العربية' },
];

export default function LanguageSelect({ $isSticky }) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const currentCode = useMemo(
    () => (i18n.language || 'en').slice(0, 2),
    [i18n.language]
  );
  const currentIndex = Math.max(
    0,
    LANGS.findIndex((l) => l.code === currentCode)
  );
  const [activeIndex, setActiveIndex] = useState(currentIndex);

  const rootRef = useRef(null);
  const btnRef = useRef(null);
  const listRef = useRef(null);

  // keep active highlight in sync with the real language
  useEffect(() => {
    setActiveIndex(currentIndex);
  }, [currentIndex]);

  // close on click outside
  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  // listen to external language changes (e.g., elsewhere in app)
  useEffect(() => {
    const handler = (lng) => {
      // ensure UI sync if changeLanguage called from somewhere else
      setOpen(false);
    };
    i18n.on('languageChanged', handler);
    return () => i18n.off('languageChanged', handler);
  }, [i18n]);

  const selectIndex = (i) => {
    const lang = LANGS[i];
    if (!lang) return;
    i18n.changeLanguage(lang.code); // persist + flips dir via your i18n.js
    setOpen(false);
    btnRef.current?.focus();
  };

  const onKeyDown = (e) => {
    if (
      !open &&
      (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ')
    ) {
      e.preventDefault();
      setOpen(true);
      // scroll active option into view after open
      setTimeout(() => {
        listRef.current
          ?.querySelector('[data-active="true"]')
          ?.scrollIntoView({ block: 'nearest' });
      }, 0);
      return;
    }
    if (!open) return;

    if (e.key === 'Escape') {
      setOpen(false);
      btnRef.current?.focus();
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(LANGS.length - 1, i + 1));
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(0, i - 1));
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      selectIndex(activeIndex);
    }
    if (e.key === 'Tab') setOpen(false);
  };

  const buttonLabel = LANGS[currentIndex]?.label ?? 'English';

  return (
    <Root ref={rootRef}>
      <Button
        ref={btnRef}
        type='button'
        aria-haspopup='listbox'
        aria-expanded={open}
        aria-controls='lang-listbox'
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onKeyDown}
        $isSticky={$isSticky}
      >
        {buttonLabel}
        <Chevron $open={open}>
          <MdOutlineKeyboardArrowDown />
        </Chevron>
      </Button>

      {open && (
        <Listbox
          id='lang-listbox'
          role='listbox'
          tabIndex={-1}
          ref={listRef}
          aria-activedescendant={`lang-opt-${activeIndex}`}
          onKeyDown={onKeyDown}
        >
          {LANGS.map((l, i) => (
            <Option
              key={l.code}
              id={`lang-opt-${i}`}
              role='option'
              aria-selected={currentIndex === i}
              data-active={activeIndex === i}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => selectIndex(i)}
            >
              {l.label}
            </Option>
          ))}
        </Listbox>
      )}
    </Root>
  );
}
