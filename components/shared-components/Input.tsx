function Input(props: any) {
    return (
        <div className={"flex mt-4 transition-all"}>
            <span className={"flex justify-center items-center w-10 bg-teal-600 text-white"}>
                {
                    props.icon
                }
            </span>

            <input
                type={props.type}
                className={"custom-input"}
                placeholder={props.label}
                name={props.name}
            />
        </div>
    )
}

export default Input;