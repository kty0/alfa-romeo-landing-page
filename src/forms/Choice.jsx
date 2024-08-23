function Choice(props) {
  console.log(props);
  const data = (model) => {
    if (!props.date) {
      props.setData(props.name);
    } else {
      console.log(Number(props.name.split(" ")[0]));
      props.setData(Number(props.name.split(" ")[0]) + "M");
    }
    props.formCheck(true);
  };
  return (
    <li
      onClick={data.bind(props.name)}
      className="bg-choice w-[298px] h-[48px] m-auto md:w-[450px] md:h-[48px] md:ml-[40px] rounded-[50px] flex items-center mt-[20px] mb-[20px] lis hover:border-[1px] hover:border-rose-500"
    >
      <p className="text-white ml-[35px] font-normal text-[16px]">
        {props.name}
      </p>
    </li>
  );
}

export default Choice;
