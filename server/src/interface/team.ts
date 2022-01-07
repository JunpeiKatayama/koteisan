interface Team {
  id: number;
  page_id: string;
  name: string;
  description: string;
  active_time_from: string;
  active_time_to: string;
  created_at: Date;
  updated_at: Date;
}

export default Team;
