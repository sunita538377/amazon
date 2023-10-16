const PasswordInput = ({label,className,value,setValue}) =>{
    return(
        <div className="textInputDiv" style={{display:"flex" , flexDirection:"column", marginTop:"10px" , marginBottom:"10px"}}>
            <label for={label} className="font-bold">{label}</label>
            <input type="password"  style={{padding:"3px", border:"1px solid gray" , borderRadius:"3px"}} id={label}
                value={value} onChange={(e)=>{
                    setValue(e.target.value);
                }}
            />
        </div>
    )
}
export default PasswordInput;