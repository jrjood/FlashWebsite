import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Counter = ({ start, end, duration }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref}>
      {inView ? (
        <CountUp
          start={start}
          end={end}
          duration={duration}
          useEasing={true}
          easingFn={(t, b, c, d) => {
            // Optional: custom easing function if you want even more control
            return c * (1 - Math.pow(2, (-10 * t) / d)) + b;
          }}
        />
      ) : (
        0
      )}
    </div>
  );
};

export default Counter;
