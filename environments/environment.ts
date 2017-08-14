// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
    firebase: {
        apiKey: "AIzaSyCrBpGJTEoNTsfurdB5PWeY8sO9eVFk3Ug",
        authDomain: "blog-prototype-e9b02.firebaseapp.com",
        databaseURL: "https://blog-prototype-e9b02.firebaseio.com",
        projectId: "blog-prototype-e9b02",
        storageBucket: "blog-prototype-e9b02.appspot.com",
        messagingSenderId: "794740928368"
    }
};
