import Head from "next/head";
import { useRouter } from "next/router";
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
    gql,
} from "@apollo/client";
import LaunchSearch from '../components/LaunchSearchBar'

const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache(),
});

export default function Home() {
    const router = useRouter();
    return (
        <ApolloProvider client={client}>
            <div className="container">
                <img
                    src="/assets/images/SpaceXLogoFull.png"
                    alt="SpaceX Logo"
                    className="img-fluid d-block m-auto"
                    onClick={() => {
                        window.open('https://www.spacex.com/', '_ blank')
                    }}
                    style={{ width: 500, cursor: 'pointer' }}
                />

                <LaunchSearch />
            </div>
        </ApolloProvider>
    );
}
