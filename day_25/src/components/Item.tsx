import React from 'react'

const Item = <T,>({item}:{item:T}) => {
  
  return (
      <div
      style={{
        minWidth:'15rem',
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        overflow: "hidden",
        fontFamily: "sans-serif",
      }}
    >
      {/* Image */}
      <div
        style={{
          width: "100%",
          height: "160px",
          backgroundColor: "#f9f9f9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {item?.imageUrl ? (
          <img
            src={item?.imageUrl}
            alt={item.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <span style={{ color: "#999", fontSize: "14px" }}>No image</span>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "16px" }}>
        <h5
          style={{
            fontSize: "18px",
            margin: "0 0 4px 0",
            color: "#333",
          }}
        >
          {item.name}
        </h5>
        <p style={{ fontSize: "12px", color: "#666", margin: "0 0 12px 0" }}>
          ID: {item.id}
        </p>
        <p
          style={{
            display: "inline-block",
            background: "#eee",
            padding: "2px 8px",
            borderRadius: "6px",
            fontSize: "12px",
            color: "#444",
            marginBottom: "12px",
          }}
        >
          {item.category ?? "Uncategorized"}
        </p>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              color: "#2e7d32",
            }}
          >
            ₹{item.price ?? "—"}
          </span>
        </div>

        {/* Buttons */}
        <div style={{ marginTop: "16px", display: "flex", gap: "8px" }}>
          <button
            style={{
              flex: 1,
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              background: "#fff",
              cursor: "pointer",
            }}
          >
            View
          </button>
          <button
            style={{
              flex: 1,
              padding: "8px",
              border: "none",
              borderRadius: "6px",
              background: "#1976d2",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Item)