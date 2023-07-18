


const CaptionDiv = (props) => {

  return (
    <figure className="m-5 md:mt-0 md:mb-4 flex-wrap md:flex-wrap md:p-1 p-3 rounded-md md:rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex flex-row md:m-5 " >
    <img className="w-20 h-20 mt-2 md:shadow md:w-20 md:h-20 object-cover md:flex-wrap rounded-full md:rounded-full md:ml-5" src={props.source} alt=""/>
    <figcaption className=" ml-5 mt-5 flex-wrap md:flex-wrap md:mt-5 md:ml-10">
      <div className="text-sky-500 dark:text-sky-400">
        {props.name}
      </div>
      <div className="text-slate-500 md:text-slate-400">
        {props.title}
      </div>
    </figcaption>

    </div>
  <div className="pt-1 md:p-3 text-center md:text-center">
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