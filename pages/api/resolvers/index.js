import axios from "axios";

export const resolvers = {
    Query: {
        getLaunches: async () => {
            try {
                const launches = await axios.get("https://api.spacexdata.com/v3/launches");
                return launches.data.map(({ flight_number, launch_year, launch_date_local }) => ({
                    flight_number,
                    launch_year,
                    launch_date_local
                }));
            } catch (error) {
                throw error;
            }
        },
    }
};