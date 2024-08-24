import { useState } from "react";

function ContactInput(props) {
  const [postCode, setPostCode] = useState("");
  const [phone, setPhone] = useState("");

  const formatE164E = (phone) => {
    const phoneSplit = phone.match(/.{1,2}/g);
    console.log(phoneSplit);
    let phoneBuffer = "+33 " + phoneSplit[0][1];
    phoneSplit.shift();
    for (const i of phoneSplit) {
      phoneBuffer = phoneBuffer + " " + i;
    }
    return phoneBuffer;
  };

  const setData = (event) => {
    console.log(props.postCode && event.target.validity.valid);
    if (props.postCode && event.target.validity.valid) {
      props.setData(event.target.value);
      if (event.target.value.length != 5) {
        props.dataValid(false);
      } else {
        props.dataValid(true);
      }
    } else if (props.tel && event.target.value.length == 10) {
      props.setData(formatE164E(event.target.value));
      props.dataValid(true);
    } else if (props.tel && event.target.value.length != 10) {
      props.dataValid(false);
    } else if (!props.postCode && !props.tel) {
      props.setData(event.target.value);
      props.dataValid(true);
    }
  };

  const formatPostCode = (event) => {
    console.log(event.target.value);
    const postCodeBuffer = event.target.validity.valid
      ? event.target.value
      : postCode;
    setPostCode(postCodeBuffer);
  };

  const formatFormPhone = (event) => {
    console.log(event.target.value);
    const phoneBuffer = event.target.validity.valid
      ? event.target.value
      : phone;
    setPhone(phoneBuffer);
    console.log("after set" + phone.length);
    console.log(typeof phone);
  };

  if (props.postCode) {
    return (
      <div>
        <p className="md:ml-[20px] ml-[40px] mb-[5px] text-[14px] font-medium text-white  ">
          {props.label}
        </p>
        <div className="grid place-items-center md:inline-block">
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]{0,5}"
            onInput={formatPostCode.bind(this)}
            onChange={setData.bind(this)}
            value={postCode}
            className="bg-choice text-white text-[14px] font-normal w-[304px] h-[50px] rounded-[50px] relative m-auto pl-[33px] mb-[20px] md:m-0 md:w-[150px]
            "
            placeholder={props.input}
          />
        </div>
      </div>
    );
  } else if (props.tel) {
    return (
      <div>
        <p className="md:ml-[20px] ml-[40px] mb-[5px] text-[14px] font-medium text-white  ">
          {props.label}
        </p>
        <div className="grid place-items-center md:inline-block">
          <input
            type="tel"
            inputMode="numeric"
            pattern="^(\d{1,2}){0,5}"
            onInput={formatFormPhone.bind(this)}
            onChange={setData.bind(this)}
            value={phone}
            className="bg-choice text-white text-[14px] font-normal w-[304px] h-[50px] rounded-[50px] relative m-auto pl-[33px] mb-[20px] md:m-0 md:w-[250px]
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
            onChange={setData.bind(this)}
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
