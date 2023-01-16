const swaggerDoc = loadDocumentSync(basePath + "/definition/swagger.yaml");
const options= {
    controllers: basePath + "/routes",
    loglevel: "debug",
    strict: true,
    validator: true,
    docs: {
        apiDocs: "/api-docs",
        apiDocsPrefix: "",
        swaggerUi: "/docs",
        swaggerUiPrefix: ""
    }
};

swaggerTools.configure(options);
swaggerTools.initialize(swaggerDoc, app, function(){
    cb();
});