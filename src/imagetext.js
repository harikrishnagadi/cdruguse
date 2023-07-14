


const CaptionDiv = (props) => {

  return (
    <figure className=" mt-0 mb-4 flex-wrap p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <img className="w-20 h-20 object-cover flex-wrap rounded-full mx-auto" src={props.source} alt=""/>
  <div className="pt-2 md:p-8 text-center md:text-center">
    <blockquote>
      <p className=" font-medium text-white">
        “{props.text}”
      </p>
    </blockquote>
    <figcaption className="font-base mt-5">
      <div className="text-sky-500 dark:text-sky-400">
        {props.name}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        {props.title}
      </div>
    </figcaption>
  </div>
</figure>
  );
};

export default CaptionDiv;