import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

// Vuetify custom configuration
const options = {
    theme: {
        options: {
            customProperties: true,
        },
        // themes: {
        //     light: {
        //         background: "#d2d2d2",
        //         darkBackground: "#657079",
        //         foreground: "#e5e5e5",

        //         lightText: "#17202c",
        //         darkText: "#131b25",
        //         contrastText: "#cecece",

        //         primary: "#194c8f",
        //         secondary: "#424242",
        //         accent: "#82B1FF",
        //         error: "#FF5252",
        //         info: "#2196F3",
        //         success: "#4CAF50",
        //         warning: "#FFC107"
        //     },
        //     dark: {
        //         background: "#1e2139",
        //         darkBackground: "#141625",
        //         foreground: "#252945",

        //         lightText: "#cecece",
        //         darkText: "#a6a6a6",
        //         contrastText: "#424242",

        //         primary: "#B388FF",

        //         secondary: "#424242",
        //         accent: "#82B1FF",
        //         error: "#FF5252",
        //         info: "#2196F3",
        //         success: "#4CAF50",
        //         warning: "#FFC107"
        //     },
        // },
        dark: false
    },
    // icons: {
    //     iconfont: "mdi",
    //     values: {
    //         icon: {}
    //     }
    // }
};

export default new Vuetify(options);
