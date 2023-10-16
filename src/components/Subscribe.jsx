import Button from "./Button";

function Subscribe() {
  return (
    <div className="bg-[color:var(--background-secondary)] rounded-2xl mb-4 border border-[color:var(--background-secondary)] py-3 px-4 flex flex-col gap-2.5">
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
