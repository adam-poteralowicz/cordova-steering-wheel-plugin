const fs = require("fs");

function addJacksonDependency (ctx) {
    if (!ctx.opts.platforms.includes('android'))
        return;
    
    const jackson = "com.fasterxml.jackson.core:jackson-databind";
    const buildGradlePath = "./platforms/android/build.gradle";
    let buildGradle = fs.readFileSync(buildGradlePath, "utf-8");
    if (buildGradle) {
        const isJacksonPresent = buildGradle.includes(implementationJackson);
        if (isJacksonPresent === false) {
            const implementationJackson = "implementation \"" + jackson + ":2.0.1\"";
            const dependencies = "dependencies {";
            if (buildGradle.includes(dependencies) === false) {
                buildGradle += '\n' +  dependencies + '\n' + "}";
            }
            let dependenciesBlockStart = buildGradle.indexOf(dependencies);
            let dependenciesBlock = buildGradle.substring(dependenciesBlockStart, dependenciesBlockStart + 1);
            let updatedDependencies = dependenciesBlock + '\n' + implementationJackson;

            buildGradle.replace(dependenciesBlock, updatedDependencies);
            fs.writeFileSync(buildGradlePath, buildGradle);
        }
    }
}

module.exports = function (ctx) {
    addJacksonDependency(ctx);
};
