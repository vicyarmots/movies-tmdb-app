import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

const UserWatchlist = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card className="w-[50%]">
        <CardHeader>
          <CardTitle className="text-2xl">User library</CardTitle>
        </CardHeader>
        <CardContent>Library</CardContent>
      </Card>
    </div>
  );
};

export default UserWatchlist;
