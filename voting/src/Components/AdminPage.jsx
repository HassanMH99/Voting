import React from "react";

export function AdminPage({ onLogout }){
return <div>
    <h1>Welcome to AdminPage</h1>
    <button onClick={onLogout}>Logout</button>
</div>
}