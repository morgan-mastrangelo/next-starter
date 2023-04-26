function ProfileText({ title, content }: any) {
    return (
        <div className={"flex justify-between w-full p-2 text-[18px]"}>
            <p>{title}</p>
            <p>{content}</p>
        </div>
    )
}

export default ProfileText;