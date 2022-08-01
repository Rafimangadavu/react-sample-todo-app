import React from 'react'

export default function User({user}) {
  return (
    <div className="col-3">
                    <div className="card">
                      img src={user.avatar} className="card-img-top avatar" alt="..." 
                      <div className="card-body">
                        <h5 className="card-title">{user.first_name}</h5>
                        <p className="card-text">{user.email}</p>
                      </div>
                    </div>
                  </div>
  )
}
