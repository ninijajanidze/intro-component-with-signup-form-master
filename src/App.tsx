import {
  ChangeEvent,
  FormEvent,
  useState,
} from "react";
import Error from "/images/icon-error.svg";

interface inputsType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

function App() {
  const [inputValues, setInputValues] =
    useState<inputsType>({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const newErrors = {
      firstName: !inputValues.firstName,
      lastName: !inputValues.lastName,
      email: !inputValues.email.match(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
      ),
      password: !inputValues.password,
    };

    setErrors(newErrors);

    if (
      Object.values(newErrors).every(
        (item) => !item
      )
    ) {
      setInputValues({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
    }
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: false,
    });
  };

  return (
    <div
      className="w-[375px] min-h-screen bg-[#ff7979] bg-[url('/images/bg-intro-mobile.png')] pt-[88px] px-[24px] pb-[68px]
    md:w-[1440px] md:flex md:py-[121px] md:px-[165px]"
    >
      <div>
        <h1
          className="font-bold text-[28px] text-white text-center mb-[16px] 
         md:text-[50px] md:mb-[11px] md:text-left md:mt-[169px] md:w-[525px]"
        >
          Learn to code by watching others
        </h1>
        <p
          className="font-medium text-[16px] text-white text-center mb-[64px]
        md:text-left md:w-[525px]"
        >
          See how experienced developers solve
          problems in real-time. Watching scripted
          tutorials is great, but understanding
          how developers think is invaluable.
        </p>
      </div>
      <div className="md:ml-[45px]">
        <button
          className="w-[327px] h-[88px] bg-[#5e54a4] rounded-[10px] [box-shadow:0_8px_0_0_rgba(0,_0,_0,_0.15)] py-[18px] px-[67px] text-white mb-[24px]
        md:w-[540px] md:h-[60px]"
        >
          <span className="font-bold text-[15px]">
            Try it free 7 days
          </span>{" "}
          <span className="font-medium text-[15px]">
            then $20/mo. thereafter
          </span>
        </button>
        <form
          onSubmit={handleSubmit}
          className="w-[327px] bg-white p-[24px] rounded-[10px] [box-shadow:0_8px_0_0_rgba(0,_0,_0,_0.15)]
          md:w-[540px] md:p-[40px]"
        >
          <input
            name="firstName"
            value={inputValues.firstName}
            onChange={handleChange}
            className={`w-[279px] h-[56px] rounded-[5px] border-[solid] border-[1px] ${
              errors.firstName
                ? "border-[#ff7979]"
                : "border-[#dedede]"
            } mb-[16px] pl-[19.4px] placeholder-[#3d3b48] text-[14px] font-semibold opacity-75
            md:w-[460px] md:pl-[32px] md:mb-[20px]`}
            placeholder="First Name"
          />
          {errors.firstName && (
            <>
              <img
                src={Error}
                alt="error icon"
                className="absolute z-10 mt-[-57px] md:mt-[-60px] ml-[240px] md:ml-[410px]"
              />
              <p
                className="font-medium text-[#ff7979] text-[11px] italic mt-[-10px] mb-[7px] ml-[115px]
              md:mb-[12px] md:ml-[297px]"
              >
                First Name cannot be empty
              </p>
            </>
          )}

          <input
            name="lastName"
            value={inputValues.lastName}
            onChange={handleChange}
            className={`w-[279px] h-[56px] rounded-[5px] border-[solid] border-[1px] ${
              errors.lastName
                ? "border-[#ff7979]"
                : "border-[#dedede]"
            } mb-[16px] pl-[19.4px] placeholder-[#3d3b48] text-[14px] font-semibold opacity-75
            md:w-[460px] md:pl-[32px] md:mb-[20px]`}
            placeholder="Last Name"
          />

          {errors.lastName && (
            <>
              <img
                src={Error}
                alt="error icon"
                className="absolute z-10 mt-[-57px] md:mt-[-60px] ml-[240px] md:ml-[410px]"
              />
              <p
                className="font-medium text-[#ff7979] text-[11px] italic mt-[-10px] mb-[7px] ml-[115px]
              md:mb-[12px] md:ml-[297px]"
              >
                Last Name cannot be empty
              </p>
            </>
          )}

          <input
            name="email"
            value={inputValues.email}
            onChange={handleChange}
            className={`w-[279px] h-[56px] rounded-[5px] border-[solid] border-[1px] ${
              errors.email
                ? "border-[#ff7979] text-[#ff7979]"
                : "border-[#dedede]"
            } mb-[16px] pl-[19.4px] placeholder-[#3d3b48] text-[14px] font-semibold opacity-75
            md:w-[460px] md:pl-[32px] md:mb-[20px]`}
            placeholder="Email Address"
          />
          {errors.email && (
            <>
              <img
                src={Error}
                alt="error icon"
                className="absolute z-10 mt-[-57px] md:mt-[-60px] ml-[240px] md:ml-[410px]"
              />
              <p
                className="font-medium text-[#ff7979] text-[11px] italic mt-[-10px] mb-[7px] ml-[115px]
              md:mb-[12px] md:ml-[293px]"
              >
                Looks like this is not an email
              </p>
            </>
          )}

          <input
            name="password"
            value={inputValues.password}
            onChange={handleChange}
            className={`w-[279px] h-[56px] rounded-[5px] border-[solid] border-[1px] ${
              errors.password
                ? "border-[#ff7979]"
                : "border-[#dedede]"
            } mb-[16px] pl-[19.4px] placeholder-[#3d3b48] text-[14px] font-semibold opacity-75
            md:w-[460px] md:pl-[32px] md:mb-[20px]`}
            placeholder="Password"
            type="password"
          />
          {errors.password && (
            <>
              <img
                src={Error}
                alt="error icon"
                className="absolute z-10 mt-[-57px] md:mt-[-60px] ml-[240px] md:ml-[410px]"
              />
              <p
                className="font-medium text-[#ff7979] text-[11px] italic mt-[-10px] mb-[7px] ml-[115px]
              md:mb-[12px] md:ml-[303px]"
              >
                Password cannot be empty
              </p>
            </>
          )}

          <button
            type="submit"
            className="w-[279px] h-[56px] bg-[#38cc8b] rounded-[5px] text-white text-[15px] font-semibold [box-shadow:inset_0_-4px_0_0_rgba(0,_0,_0,_0.09)] mb-[8px] cursor-pointer hover:bg-[#77e2b3]
            md:w-[460px]"
          >
            CLAIM YOUR FREE TRIAL
          </button>
          <div className="text-center mx-[20px]">
            <span className="text-[#a6a1cf] text-[11px] font-medium">
              By clicking the button, you are
              agreeing to our{" "}
              <span className="text-[#ff7979] text-[11px] font-medium">
                Terms and Services
              </span>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
