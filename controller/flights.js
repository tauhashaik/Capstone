import {getFlights, getFlight, addFlight, deleteFlight, editFlight} from '../models/flights-database.js'

export default{
    getFlights: async(req, res)=>{
        res.send(await getFlights())
    },

    getFlight: async(req, res)=>{
        res.send(await getFlight())
    },

    addFlight: async(req, res)=>{
        const {flightName, flightDesc, seatsAvail, flightPrice} = req.body;
        await addFlight(flightName, flightDesc, seatsAvail, flightPrice);
        res.send(await getFlights())
    },

    deleteFlight: async(req, res)=>{
        res.send(await deleteFlight(req.params.id))
    },

    editFlight: async(req,res)=>{ 
            const [flight] = await getFlights(+req.params.id)
    
            let {flightName, flightDesc, seatsAvail, flightPrice} = req.body
    
            flightName ? flightName= flightName: {flightName}=flight
    
            flightDesc ? flightDesc= flightDesc: {flightDesc}=flight
    
            seatsAvail ? seatsAvail= seatsAvail: {seatsAvail}=flight
    
            flightPrice ? flightPrice= flightPrice: {flightPrice}=flight
    
            await editFlight(flightName, flightDesc, seatsAvail, flightPrice,+req.params.id)
            
            res.json(await getFlights())
        }
    }

