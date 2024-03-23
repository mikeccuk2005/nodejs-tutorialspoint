
exports.parseENV = (processdotenv) => {
    console.log("parseENV")
    const PORT = processdotenv.PORT ? parseInt(processdotenv.PORT) : 8081
    return { PORT }
}