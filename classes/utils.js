class Utils {

    static dateFormat(date)
    {
        //return date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes(); 

        if (date.getMonth() < 10) {
            return date.getDate() + "/0" + (date.getMonth()+1) + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();
        }

    }

}