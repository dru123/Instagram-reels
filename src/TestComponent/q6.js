ReactDOM.render((
    <Router>
    <div>
    <Route path="/" render={Home} />
    <Route path="/login" render={Login} />
    </div>
    </Router>),
    document.getElementById('root')
    )
    //yh agr search m sirf=>'/' dale toh sirf home render hoga kuki '/' k subpathsirf'/ ' ek hi h itself.....
    /// or agr search m =>'/login' dale toh dono render honge home or login kuki dono subpath h ='/login k ..
