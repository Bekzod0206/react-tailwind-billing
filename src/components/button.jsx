function Button({styles}) {
  return (
    <button
      type="button"
      className={`py-3 px-6 font-montserrat font-medium text-[18px] bg-cyan-400 rounded-[10px] outline-none ${styles}`}
    >
      Start
    </button>
  )
}

export default Button