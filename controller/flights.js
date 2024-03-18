import {getFlights, getFlight, addFlight, deleteFlight, editFlight} from '../models/flights-database.js'

export default{
    getFlights: async(req, res)=>{
        res.send(await getFlights())
    },

    getFlight: async(req, res)=>{
        res.send(await getFlight(+req.params.id))
    },

    addFlight: async(req, res)=>{
        const {flightName, flightDesc, seatsAvail, flightPrice,flightUrl,flightUrl2,flightUrl3,flightUrl4} = req.body;
        await addFlight(flightName, flightDesc, seatsAvail, flightPrice,flightUrl,flightUrl2,flightUrl3,flightUrl4);
        res.send(await getFlights())
    },

    deleteFlight: async(req, res)=>{
        res.send(await deleteFlight(req.params.id))
    },

    updateFlight: async(req,res)=>{ 
        const [flight] = await getFlight(+req.params.id)
        let {flightName, flightDesc, seatsAvail, flightPrice,flightUrl,flightUrl2,flightUrl3,flightUrl4} = req.body
    
            flightName ? flightName= flightName: {flightName}=flight
    
            flightDesc ? flightDesc= flightDesc: {flightDesc}=flight
    
            seatsAvail ? seatsAvail= seatsAvail: {seatsAvail}=flight
    
            flightPrice ? flightPrice= flightPrice: {flightPrice}=flight

            flightUrl ? flightUrl=flightUrl: {flightUrl}=flight

            flightUrl2 ? flightUrl2=flightUrl2: {flightUrl2}=flight

            flightUrl3 ? flightUrl3=flightUrl3: {flightUrl3}=flight

            flightUrl4 ? flightUrl4=flightUrl4: {flightUrl4}=flight
    
            await editFlight(flightName, flightDesc, seatsAvail, flightPrice,flightUrl,flightUrl2,flightUrl3,flightUrl4,+req.params.id)
            
            res.json(await getFlights())
        }
    }

