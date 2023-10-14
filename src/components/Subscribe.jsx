import Button from "./Button";

function Subscribe() {
  return (
    <div className="bg-[#16181c] rounded-2xl mb-4 border border-[#16181c] py-3 px-4 flex flex-col gap-2.5 text-[#e7e9ea]">
      <h6 className="text-xl leading-6 font-extrabold">
        Premium&apos;a Abone Ol
      </h6>
      <p className="font-bold leading-5">
        Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam
        geliri payı kazan.
      </p>
      <div className="self-start">
        <Button>Abone ol</Button>
      </div>
    </div>
  );
}

export default Subscribe;
