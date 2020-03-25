

export const listenToResolveError = ({listen, setState}) => {
    listen('resolve-error', data => {
        if(data) {
          setState('error', {
            status: true
          }, true);
        }
      })
}