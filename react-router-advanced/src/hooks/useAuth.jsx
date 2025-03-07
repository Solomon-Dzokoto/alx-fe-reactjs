

const useAuth = () => {
    const choice = [true,false]
    const isAuthentication =  choice[Math.floor(Math.random() * 2)]
    console.log(isAuthentication)
  return isAuthentication
}

export default useAuth
