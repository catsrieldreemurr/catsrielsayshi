// This is nerdy as hell
export default function GetCurrentAge(){
    const birthDate = new Date("June 7, 2008 00:00:00");
    const todayDate = new Date();

    let years = todayDate.getFullYear() - birthDate.getFullYear()
    if(
        todayDate.getMonth() < birthDate.getMonth() || // If birthmonth hasnt happened yet
        todayDate.getMonth() == birthDate.getMonth() && // If's the birthmonth, but not the birthday yet
        todayDate.getDate() < birthDate.getDate() 
    ){
        years-- // Remove 1 from the years variable
    }
    
    return( 
        <span>{years}</span>
    )
}