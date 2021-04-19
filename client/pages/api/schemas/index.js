import { gql } from "apollo-server-micro";

export const typeDefs = gql`
    type  Launch {
        flight_number: Integer
        launch_year: Integer
        launch_date_local: String
    }

    type  Query {
        getLaunches: [Launch]
    }`