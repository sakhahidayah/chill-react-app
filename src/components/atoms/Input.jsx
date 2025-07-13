function Input({ type, id, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="bg-transparent px-3 py-2 border border-[#E7E3FC3B] rounded-xl text-[#C1C2C4] font-normal text-[9px] leading-[140%] tracking-wide focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
    />
  );
}

export default Input;
