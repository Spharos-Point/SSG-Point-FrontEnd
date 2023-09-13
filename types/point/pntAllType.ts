//point all get
export interface PointAll {
    id: number;
    totalPoint: number;
    point: number;
    used: boolean;
    pointType: string;
    
    user: {
      createAt: string;
      updateAt: string;
      id: number;
      uuid: string;
      loginId: string;
      name: string;
      email: string;
      password: string;
      phone: string;
      address: string;
      status: number;
      pointPassword: string;
      roll: string;
      enabled: boolean;
      username: string;
      authorities: { authority: string };
      credentialsNonExpired: boolean;
      accountNonExpired: boolean;
      accountNonLocked: boolean;
    };
  }