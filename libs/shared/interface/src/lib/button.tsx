export function Button({ text = 'Welcome to Button!' }: { text: string }) {
  return (
    <button className="bg-black px-4 py-2  rounded-lg text-white inline-block">
      {text}
    </button>
  );
}

export default Button;
