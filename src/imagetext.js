


const CaptionDiv = (props) => {

  return (
    <figure className=" mt-0 mb-4 flex-wrap p-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex flex-row m-5">
    <img className="w-20 h-20 object-cover flex-wrap rounded-full ml-5" src={props.source} alt=""/>
    <figcaption className="flex-wrap mt-5 ml-10">
      <div className="text-sky-500 dark:text-sky-400">
        {props.name}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        {props.title}
      </div>
    </figcaption>

    </div>
  <div className="pt-1 md:p-6 text-center md:text-cent">
    <blockquote className="text-left">
      <p className=" font-medium text-sm text-white">
        “{props.text}”
      </p>
    </blockquote>

  </div>
</figure>
  );
};

export default CaptionDiv;