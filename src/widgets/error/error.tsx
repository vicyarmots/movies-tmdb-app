import { ReloadButton } from "@/entities/navigation/ui/reload";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";

export const ErrorWidget = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Something went wrong!</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>Please try to reload page!</CardDescription>
        <ReloadButton />
      </CardContent>
    </Card>
  );
};
