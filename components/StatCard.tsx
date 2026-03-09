import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
}

export function StatCard({ title, value }: StatCardProps) {
  return (
    <Card className="py-6 px-3 bg-white">
      <CardHeader>
        <CardTitle className="text-lg text-gray-600">{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="text-4xl font-semibold">{value}</div>
      </CardContent>
    </Card>
  );
}
