const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function time_Stamp(n){
    const timestamp = new Date(n);
    return timestamp.valueOf();
}

module.exports={
    

    time_CountDown:  (req, res) =>{
        try {
            const diffrence_stamp = (time_Stamp(req.body.deadline) - Date.now());
            const diffrence_date = {
                    day: Math.floor(diffrence_stamp / day),
                    hour: Math.floor((diffrence_stamp % day) / hour),
                    minute: Math.floor((diffrence_stamp % hour) / minute),
                    second: Math.floor((diffrence_stamp % minute) / second)
            }
            res.status(200).json(diffrence_date);        
        } catch (error) {
            res.status(404).json({err: error.message})
        }

    },


}