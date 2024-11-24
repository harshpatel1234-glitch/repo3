import request, { gql } from "graphql-request"


const MASTER_URL="https://ap-south-1.cdn.hygraph.com/content/cm3efsbgo038o07vz78lakzny/master"
export const getCarList=async()=>{
    const query=gql`
    query MyQuery {
  carlists {
    id
    carAvg
    carBrand
    carType
    name
    price
  }
}`

const result=await request(MASTER_URL,query);
return result;
}
