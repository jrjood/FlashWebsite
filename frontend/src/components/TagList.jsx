const TagList = ({ tags }) => {
  return (
    <ul className='tag-list'>
      {tags.map((tag, index) => (
        <li key={index} className='tag-dot'>
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
