import NavGuide from "../components/NavGuide/NavGuide";

export default function WorkshopTools() {
    return (
        <>
            <NavGuide></NavGuide>

            <div style={{paddingTop: '125px', marginLeft: '200px', fontWeight: "bold"}}>Flutter UI Design & Implementation with Android & iOS native libary support</div>
            <ul style={{marginTop: '0px', marginBottom: '30px'}}>

                <div style={{marginLeft: '145px'}}>
                <li>
                    Android native plugins in Kotlin
                    <br></br>
                    iOS native plugins in SwiftUI
                    <br></br>
                    With or without Flutter plugin middleware framework to fit the intended use cases of the library or plugin. Flutter support can be augmented, added, removed or upgraded at a later date
                </li>
                <li>
                    Local to device, files and folders compression and decompression
                    <br></br>
                    Local to device, files and folders encryption and decryption with nonce
                </li>
                </div>
                <div style={{marginTop: '-15px', marginLeft: '7px'}}>
                <li>
                    Isolate manager that can handle multiple pools / task groups. Relay status information about the workload the isolate is handling that can be
                    used in real-time by the app or sent over the internet / a network
                </li>
                <li>
                    An isolate group specific to handling http traffic such as images, audio, mixed media, and data files that the app requests for during updates, in-use, login and account recovery. Uses platform specific Cronet libraries for HTTP and HTTPS support
                </li>
                <li>
                    Local application sqlite database
                    <ul>
                        <li>
                            Cross platform sqlite database for mobile, tablet and web browser. Design, implement, test and upgrade queries and commands from the ground up. Resolving to CREATE, INSERT, SELECT, DELETE, ALTER and PRAGMA queries and commands to stand-up, configure and use the database
                        </li>
                        <li>
                            Interacting with the database and contents based on user and system commands stemming from the UI or another initiation factor
                        </li>
                        <li>
                            Keep track of settings, information at a per user granularity
                        </li>
                        <li>
                            In-house per Database, Table, Row or Column encryption. Or with SQLCipher
                        </li>
                    </ul>

                </li>
                <li>
                    Communicate with services using gRPC, HTTP/S, SOAP, XML, JSON
                </li>
                <li>
                    Register and/or Authenticate a user using either OIDC or SAML protocol to Keycloak, Okta, Google, Yahoo, Facebook or using Keycloak as go between to Okta, Google, Yahoo, Facebook
                    <br></br>
                    Login and/or Register using JWT to a number of back-ends. Node.JS or Bun or Deno 2 , .NET Core 3.1+ , Java with Spring Security and Spring Boot , or Python. Backed by SQL databases and Redis caches, or a mixture of each type
                </li>
                <li>
                    Interact with Stripe payment network
                </li>
                <li>
                    Communicate to and with back-end services with SSL certificates using gRPC, SOAP, HTTP, Kafka, and many other methods.
                </li>
                <li>
                    Handle user requests to purchase a consumable, non-consumable or subscription via Apple App Store or Google Play Store. Recover a purchase that is still current/active. Handle user refunds so access to app is disabled the moment it takes place
                    <ul>
                        <li>
                            Platform HTTP API
                        </li>
                        <li>
                            Platform Pub/Sub API
                        </li>
                    </ul>
                    <ul style={{marginTop: '-15px'}}>
                        <li>
                            Connect to backend service(s) for handling verifying a purchable, refund, and cancelation that is backed by SQL or NoSQL and authenication. Can use Platform HTTP API or Platform Pub/Sub API
                        </li>
                        <li>
                            Offload debit/credit/crypto transactions to third-party service
                        </li>
                    </ul>
                </li>
                <li style={{marginTop: '-15px'}}>
                    Multiple UI layout designs
                    <ul>
                        <li>Can be mixed with MobX, Provider, AutoRoute, Bloc</li>
                        <li>Each layout can be used standalone or along with another design</li>
                        <li>Layout can be customized to look and feel to UI Design plans</li>
                    </ul>
                    <ul style={{marginTop: '-15px', marginLeft: '10px'}}>
                        <li>
                            <a href="https://github.com/sunsetZaaZa/mobile_app_showcase">Traditional</a>
                        </li>
                        <li>
                            <a href="https://github.com/sunsetZaaZa/placement_independent_ui_components_flutter">Smoke Trail</a>
                        </li>
                    </ul>
                </li>
                </div>

            </ul>

            <div style={{marginLeft: '35px', fontWeight: "bold"}}>Backend Software Engineering</div>
            <ul style={{marginTop: '0px', paddingBottom: '10px'}}>
                <li>
                    Implement network / internet accessible API with one or a combination of the following programming languages and tool set to Login and Register a user to Keycloak or Okta, Google, Yahoo, Facebook
                    <ul>
                        <li>
                            Java with Spring Boot & Spring Security
                        </li>
                        <li>
                            .NET Core 3.1 to 9.0+ using C# 7 & Later. Full async support
                        </li>
                        <li>
                            NodeJS , Deno 2 , BunJS with Express or Elysia to include JWT for user login, registration and management
                        </li>
                    </ul>
                </li>
                <li>
                    SQL database storage with Microsoft SQL Server, Posgresql, or MySQL. Commands for creating Database, Tables and Insert, Delete, Alter, Update, and Select queries in Text or Stored Procedure to interact with back-end / web api. Making use of high-availability and redundancy in one of many available strategies. User information is not stored or handled in unsecure manner
                </li>
                <li>
                    Realtime Web Api Cache with Redis or Redis-like software package. Handle high-availability and redundancy using one of multiple strategies
                </li>
                <li>
                    Communicate to and with back-end services with SSL certificates using gRPC, SOAP, HTTP, Kafka, and many other methods.
                </li>
                <li>
                    Register and / or Login user using Keycloak as source of authenticating credentials to an account with a scope or mixture of. Account is backed by SQL or NoSQL or Realtime Cache or Third-party Service
                </li>
                <li>
                    Containerize software package for Docker or Podman and Kubernates
                </li>
                <li>
                    Interact with Stripe payment network
                </li>
                <li>
                    Innerconnect with Kafka or another messaging brokerage software package for microservice / monolith communication
                </li>
            </ul>

            <div style={{marginLeft: '35px', fontWeight: "bold"}}>Frontend Website Software Engineering</div>
            <ul style={{marginTop: '0px', paddingBottom: '10px'}}>
                <li>
                    Design and Implement mobile, tablet and computer screen size responsive website that augment on user and system interaction
                    <br></br>
                    Written using the following:
                    <ul>
                        <li>
                            React , Redux / Redux-Toolkit , React Router-v7 or NextJS
                        </li>
                        <li>
                            Website look and feel specific to theme and plan
                        </li>
                        <li>
                            GDPR compliance
                        </li>
                    </ul>
                </li>
                <li>
                    Connect and visually integrate data sources / database connections with user authentication check before showing information on screen
                </li>
                <li>
                    Communicate with a single or multiple back-end endpoints securely with SSL certificates using gRPC, HTTP, Kafka, Amazon SNS, Redis store, and many others.
                </li>
                <li>
                    Register and/or Authenticate a user using either OIDC or SAML protocol to Keycloak, Okta, Google, Yahoo, Facebook or using Keycloak as go between to Okta, Google, Yahoo, Facebook
                    <br></br>
                    Login and/or Register using JWT to a number of back-ends. Node.JS or Bun or Deno 2 , .NET Core 3.1+ , Java with Spring Security and Spring Boot , or Python. Backed by SQL databases and Redis caches, or a mixture of each type
                </li>
                <li>
                    Use pre-existing user interface schema / paradigm documentation when making or extending the user interface with existing components and new ones
                </li>
                <li>
                    Interact with Stripe payment network
                </li>
                <li>
                    User information is not stored or handled in unsecure manner
                </li>
            </ul>

            <div style={{marginLeft: '35px', fontWeight: "bold"}}>IT Architect</div>
            <ul style={{marginTop: '0px', paddingBottom: '10px'}}>
                <li>
                    Document, analyze, plan, implement hardware requirement based on software performance within different hardware configurations
                    <br></br>
                    Reconfigure hardware layout and requirement with minimal production downtime
                </li>
                <li>
                    Standup, to be on-premise or in the Cloud, database softwares PostgreSQL, CassandraSQL, and SpacetimeDB as solo or cluster
                </li>
                <li>
                    Multiple software layers between regions of the overall software ecosystem. To handle load-balancing, high-availability, data-redundancy, fail-over mitigation in one or more
                    specific strategy for a region, regions or entire software ecosystem so it stays serving and receiving system/user requests
                </li>
                <li>
                    Integrate software package to on-premise or in cloud. Which softwares to use at a point in the network and configuration of it
                    <ul>
                        <li>
                            Installation of software on bare-metal / physical servers in a datacenter
                        </li>
                        <li>
                            Software packages in containerized virtual machines that run on pre-configured Kubernates with or without high-availability
                        </li>
                        <li>
                            Mixture of software based load balancing with cloud services such as OVHCloud, AWS, Azure and Kubernates with or without high-availability
                        </li>
                        <li>
                            AWS software / services for load balancing front-end, back-end, database and cache
                        </li>
                    </ul>
                </li>
                <li>
                    Configure database software such that its ran as local clustering that communicates with a larger network of clusters for high-availability, or classic write-read configuration, or regional clusters that communicate with each other
                </li>
                <li>
                    Stress test entire and sub-systems of software ecosystem with crafted HTTP, gRPC, or another transfer layer to benchmark performance for insight into the software package's characteristics 
                </li>
            </ul>
        </>
    );
}