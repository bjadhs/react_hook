import useLocal from '../hooks/useLocal';
import useUpdateHook from '../hooks/useUpdateHook';

const Example3 = () => {
  const [name, setName] = useLocal('name', 'bijaya');
  useUpdateHook(name);

  return (
    <div>
      <h1>Example</h1>
      <input
        className='text-gray-500 border-2 rounded-md'
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name}</p>
    </div>
  );
};

export default Example3;
