
const Sunucu_1 = "meripub";
module.exports = {
    apps: [
        {
            name: `${Sunucu_1}-EXECUTIVE`,
            script: "./Executive/ramal.js",
            watch: false
        },
        {
            name: `${Sunucu_1}-STATS`,
            script: "./Stats/ramal.js",
            watch: false
        },
        {
            name: `${Sunucu_1}-MOD`,
            script: "./Moderasyon/ramal.js",
            watch: false
        },
		{
            name: `${Sunucu_1}-ASYNC`,
            script: "./Async/ramal.js",
            watch: true
        },
        {
            name: `${Sunucu_1}-LOG`,
            script: "./Log/ramal.js",
            watch: false
        },
        {
            name: `${Sunucu_1}-EVENTS`,
            script: "./Events/ramal.js",
            watch: false
        }
    ]
};
