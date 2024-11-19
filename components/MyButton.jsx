export default function MyButton({ classNames,handleClick,children }){
    return(
        <button onClick={handleClick} className={classNames}>
            {children}
        </button>
    )
}