import { Chain } from "./client/zeus";

const chain = Chain("http://localhost:4000/graphql");

async function get() {
  try {
    const response = await chain("query")({
      getUser: [
        //input
        {
          id: "1",
        },
        //output
        {
          email: true,
          firstname: true,
        },
      ],
    });
    console.log(response.getUser);
  } catch (e) {
    console.log(e);
  }
}

get();

async function send() {
  try {
    const response = await chain("mutation")({
      createUser: [
        {
          input: {
            email: "sunil@gmail.com",
            firstname: "Sunil",
            lastname: "Simar",
          },
        },
        {
          id: true,
          email: true,
        },
      ],
    });
    console.log(response.createUser);
  } catch (e) {
    console.log(e);
  }
}

send();
