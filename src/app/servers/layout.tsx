import Link from "next/link";

const mockChatRoomList = [
  {
    id: "1",
    name: "General",
  },
  {
    id: "2",
    name: "Random",
  },
  {
    id: "3",
    name: "Off-topic",
  },
];

export default function ChannelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav className="flex flex-col">
        servers nav
        <div className="flex flex-col gap-10">
          {mockChatRoomList.map((chatRoom) => (
            <Link key={chatRoom.id} href={`/chat/${chatRoom.id}`}>
              <div className="text-xl">{chatRoom.name}</div>
            </Link>
          ))}
        </div>
      </nav>
      {children}
    </section>
  );
}
