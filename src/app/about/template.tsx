import { Auth } from "@/components/common/auth";

export default function Template({ children }: { children: React.ReactNode }) {
    return <div><Auth>
    <div style={{ display: "flex" }}>
      <div>
        <h2>Menu</h2>
      </div>
      <div>{children}</div>
    </div>
  </Auth></div>;
  }