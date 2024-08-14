export const errorHandler = (statusCode, message) => {
   const error = new Error()
   const statusCode = error.statusCode
   return error
}