function ContactInput(props) {
  if (props.postCode) {
    return (
      <div>
        <p className="md:ml-[20px] ml-[40px] mb-[5px] text-[14px] font-medium text-white  ">
          {props.label}
        </p>
        <div className="grid place-items-center md:inline-block">
          <input
            type="text"
            className="bg-choice text-white text-[14px] font-normal w-[304px] h-[50px] rounded-[50px] relative m-auto pl-[33px] mb-[20px] md:m-0 md:w-[150px]
            "
            placeholder={props.input}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p className="md:ml-[20px] ml-[40px] mb-[5px] text-[14px] font-medium text-white  ">
          {props.label}
        </p>
        <div className="grid place-items-center md:inline-block">
          <input
            type="text"
            className="bg-choice text-white text-[14px] font-normal w-[304px] h-[50px] rounded-[50px] relative m-auto pl-[33px] mb-[20px] md:m-0 md:w-[250px]
          "
            placeholder={props.input}
          />
        </div>
      </div>
    );
  }
}

export default ContactInput;
