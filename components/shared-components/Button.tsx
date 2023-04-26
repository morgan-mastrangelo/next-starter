function Button(props: any) {
    return (
        <button className={"w-full p-3 mt-4 mb-2 text-white bg-teal-600 transition-all hover:bg-teal-900"} {...props}>{props.children}</button>
    )
}

export default Button;