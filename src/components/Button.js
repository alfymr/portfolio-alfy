function Button({ children,variant }){

    const variants = {
        "outline-yellow": 'text-yellow-200 border-yellow-300 rounded-full inline-block shadow-2xl', 
        "fill-yellow": 'bg-yellow-300 rounded-full mt-5 inline-block shadow-2xl'
    }

    const pickedVariant = variants[variant];

    return (
        <div className="text-center">
            <a className= {` border font-semibold  text-lg py-2 px-10 ${pickedVariant}`}>
                {children}
            </a>
        </div>
    );
}

export default Button;