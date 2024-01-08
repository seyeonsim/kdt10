import { useForm } from "react-hook-form";

function FormEx() {
  const {
    register, // input 할당, value 변경 감지
    handleSubmit, // form submit 이벤트 시 호출
    formState: { errors }, // 폼 상태 객체 (그 안에 에러 객체)
  } = useForm();

  const onValid = (data) => {
    console.log("onValid", data);
  };

  return (
    <>
      <h1>react hook form 실습</h1>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          type="text"
          placeholder="이름"
          {...register("name", {
            required: "이름은 필수 항목입니다.",
          })}
        />
        {errors.name?.message}
        <br />

        <input
          type="text"
          placeholder="나이"
          {...register("age", {
            min: {
              value: 0,
              message: "0 이상의 숫자만 입력 가능합니다",
            },
          })}
        />
        {errors.age?.message}

        <br />

        <button>제출</button>
      </form>
    </>
  );
}

export default FormEx;
